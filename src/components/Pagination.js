import React from "react";

const createPaginationButtons = (page, lastPage) => {
  let buttons = [];
  const expectedButtons = 7;
  const min = Math.max(page - 3, 1);
  const max = Math.min(lastPage + 1, page + 3);

  for (let i = min; i < max; i++) {
    buttons.push(i);
  }

  let bigger = buttons[buttons.length - 1];
  while (buttons.length < expectedButtons && bigger < lastPage) {
    bigger = bigger + 1;
    buttons.push(bigger);
  }

  let smaller = buttons[0];
  while (buttons.length < expectedButtons && smaller > 1) {
    smaller = smaller - 1;
    buttons.unshift(smaller);
  }
  return buttons;
};

export default function Pagination(props) {
  const { page, setPage, lastPage } = props;
  let buttons = createPaginationButtons(page, lastPage);

  return (
    <div class="pagination">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={
              "btn-pagination " + (button === props.page ? "active" : "")
            }
            onClick={() => {
              setPage(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}
