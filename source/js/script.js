const formLabel = document.querySelectorAll(`.form__label`);

/**
 * @description очищает активный класс всех карточек.
 */
const clearFormLabelActive = () => {
  formLabel.forEach((item) => {
    item.classList.remove(`form__label--active`);
  });
};

formLabel.forEach((item) => {
  item.addEventListener(`mouseout`, (evt) => {
    evt.preventDefault();

    clearFormLabelActive();

    item.classList.add(`form__label--active`);
  });
});
