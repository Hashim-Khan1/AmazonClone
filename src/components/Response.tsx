function Response(props: any) {
  return (
    <div id="response" style={{ backgroundColor: `${props.colour}` }}>
      <p id="repsoneTitle">{props.title}</p>
      <p>{props.message}</p>
    </div>
  );
}
export default Response;
