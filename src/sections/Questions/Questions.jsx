import Button from "@/components/Button"
import Section from "@/layouts/Section"

const Questions = () => {
  const questionItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ]
  return (
    <Section
      title="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      titleId="Questions-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<Button label="Ask a Question" href="/support" />}
    ></Section>
  )
}

export default Questions
