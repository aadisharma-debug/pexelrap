document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling;
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
  });
});