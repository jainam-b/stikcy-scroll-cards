import StickyCards from "./card/sticky-cards/StickyCards";

export default function Page() {
  return (
    <>
      <section className="intro ">
        <h1> The Foundation</h1>
      </section>
      <StickyCards />
      <section className="outro">
        <h1> Ends in Form</h1>
      </section>
    </>
  );
}
