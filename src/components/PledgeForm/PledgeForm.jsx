import React from "react";

function PledgeForm() {
  return (
    <form>
      <div>
        <label htmlFor="amount">Enter Amount: $</label>
        <input type="text" id="amount" placeholder="Enter Amount" />
      </div>
      <div>
        <label htmlFor="comment">Share a Comment:</label>
        <input type="text" id="comment" placeholder="Comment" />
      </div>
      <button type="submit">Pledge Amount</button>
    </form>
  );
}

export default PledgeForm;
