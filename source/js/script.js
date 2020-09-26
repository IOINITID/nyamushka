const formLabel = document.querySelectorAll(`.form__label`);

/**
 * @description очищает активный класс всех карточек.
 */
const clearFormLabelActive = () => {
  for (const item of formLabel) {
    item.classList.remove(`form__label--active`);
  }
};

for (const item of formLabel) {
  item.addEventListener(`mouseout`, (evt) => {
    evt.preventDefault();

    clearFormLabelActive();

    item.classList.add(`form__label--active`);
  });
}
