import RadarChart from "./radarChart.jsx";

export default function Graphic({skills}) {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <RadarChart skills={skills} />
      </div>
    </div>
  );
}
