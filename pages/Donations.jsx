export default function Donations() {
  return (
    <div>
      <button
        onClick={() =>
          window.open(
            "https://www.paypal.com/donate/?hosted_button_id=GSCKRFFFR3Z8Q",
            "_blank"
          )
        }
      >
        Make a donation!
      </button>
    </div>
  );
}
