// figma node: 1:57 (FRAME) "Container"
export default function Container(props: { sText?: string } = {}) {
  return (
    <div data-name="Container" style={{
      position: "relative",
      width: 36,
      height: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <span data-name="S" style={{
        position: "absolute",
        left: 14.5,
        top: 0.5,
        width: 7,
        height: 15,
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "15px",
        letterSpacing: "0.499em",
        color: "rgb(233,116,81)",
      }}>{props.sText ?? "S"}</span>
    </div>
  );
}
