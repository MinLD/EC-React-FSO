import styles from "../style.module.scss";
function AdditionalInfo({ material, size }) {
  const { boxBody, boxContent, containerAdditional } = styles;
  const data = () => [
    { title: "Size", content: ["S", "M", "L"] },
    { title: "Material", content: ["Fleece"] },
    { title: "Color", content: ["Black", "Blue"] },
  ];
  return (
    <div className={containerAdditional}>
      {data().map((i, index) => (
        <div key={index} className={boxBody}>
          <div>{i.title}</div>
          <div className={boxContent}>
            {i.content.map((item, index) => (
              <div key={index}>{item} </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdditionalInfo;
