import * as d3 from "d3";
import rawDataSet from "./data";

rawDataSet.sort((a, b) => +a.error - +b.error);

interface DataPoint {
  occurences: number;
  errors: number;
  date: Date;
}
const uniqueData = new Map<string, DataPoint>();
for (let data of rawDataSet) {
  const { date, error } = data;
  let obj = uniqueData.get(date) ?? {
    occurences: 0,
    errors: 0,
    date: new Date(date),
  };
  if (error) {
    obj.errors++;
  }
  obj.occurences++;
  uniqueData.set(date, obj);
}

const myDataSet = Array.from(uniqueData.values());

const endDate = new Date(
  Math.max(...myDataSet.map((data) => data.date.getTime()))
);
const startDate = new Date(
  Math.min(...myDataSet.map((data) => data.date.getTime()))
);

const width = 1200;
const margin = 2;
const daysPerRow = 15;
const squareSize = 1200 / 15 - margin;

const dateRange = d3.timeDays(startDate, endDate);
const timeScale = d3
  .scaleTime()
  .domain([
    startDate.getTime(),
    startDate.getTime() + 1000 * 60 * 60 * 24 * daysPerRow,
  ])
  .range([0, width]);

const computeSquarePosition = (date: Date) => {
  const pos = timeScale(date);
  const x = pos % width;
  const y = Math.floor(pos / width) * (squareSize + margin);
  return { x, y };
};
const getX = (date: Date) => computeSquarePosition(date).x;
const getY = (date: Date) => computeSquarePosition(date).y;
const root = d3.select("#root");
const svg = root.append("svg").attr("width", 1200).attr("height", 1200);
const squares = svg.selectAll("g.square").data(myDataSet);
squares
  .enter()
  .append("g")
  .attr("class", "square")
  .append("rect")
  .attr("color", "red")
  .attr("width", squareSize)
  .attr("height", squareSize)
  .attr("x", (data) => getX(data.date))
  .attr("y", (data) => getY(data.date))
  .style("opacity", (d) => (d.errors ? d.errors * 0.5 : d.occurences * 0.1))
  .style("fill", (d) => (d.errors ? "red" : "green"))
  .on("mouseover", function (event) {
    const node = d3.select(this);
    const [{ date, errors, occurences }] = node.data() as any as DataPoint[];
    popup.textContent = `On ${d3.timeFormat("%Y-%m-%d")(
      date
    )} there were ${occurences} runs with ${errors} errors`;
  });

const popup = document.querySelector("#information") as HTMLElement;
