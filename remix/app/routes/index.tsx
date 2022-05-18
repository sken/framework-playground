const createDiv = (): string => {
    return '<div>A new div</div>'
}
export default function Index() {
  return (
    <div>
        {createDiv()}
    </div>
  );
}
