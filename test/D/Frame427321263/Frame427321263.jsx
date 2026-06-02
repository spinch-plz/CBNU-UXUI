// figma node: 1:88 (FRAME) "Frame 427321263"
export default function Frame427321263(props: { valueText?: string } = {}) {
  return (
    <div style={{
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 24,
      border: "1px solid rgb(233,116,81)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <span data-name="4" style={{
        position: "absolute",
        left: 12.5,
        top: 6,
        width: 11,
        height: 24,
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        letterSpacing: "-0.050em",
        color: "rgb(233,116,81)",
      }}>{props.valueText ?? "4"}</span>
    </div>
  );
}
