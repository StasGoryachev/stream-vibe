import "./SliderNavigation.scss"
import classNames from "classnames"
import Button from "@/components/Button"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'tile'
     */
    mode = "",
  } = props

  return (
    // если в mode ничего не передадими или передадим пустую строку, то компоненту корневому ничего не добавится никаких лишних стилей
    //То есть когда сущность mode , которую можно будет передать   в компонент SliderNavigation будет не undefined и не пустой строчкой, то корневому элементу SliderNavigatiion добавится дополнительный БЭМ модификатор

    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          "data-js-slider-previous-button": "",
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          "data-js-slider-next-button": "",
        }}
      />
    </div>
  )
}

export default SliderNavigation
