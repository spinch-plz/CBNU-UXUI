// figma node: 1:73 (FRAME) "Frame 427321250"
export default function Frame427321250(props: { valueText?: string } = {}) {
  return (
    <div style={{
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <span data-name="27" style={{
        position: "absolute",
        left: 9,
        top: 6,
        width: 18,
        height: 24,
        fontFamily: "Pretendard",
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        letterSpacing: "-0.050em",
        color: "rgba(26,26,26,0.3)",
      }}>{props.valueText ?? "27"}</span>
    </div>
  );
}
