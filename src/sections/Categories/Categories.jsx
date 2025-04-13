import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "./../../components/Slider/index"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"

const Categories = () => {
  const categoryItems = [
    {
      title: "Action",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Adventure",
      images: [
        "/src/assets/images/categories/action/5.jpg",
        "/src/assets/images/categories/action/6.jpg",
        "/src/assets/images/categories/action/7.jpg",
        "/src/assets/images/categories/action/8.jpg",
      ],
    },
    {
      title: "Comedy",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Drama",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Horror",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
  ]

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"

      //! дописать 
      actions={<SliderNavigation />}
      isActionsHiddenOnMobile
    >
      <Slider>
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories
