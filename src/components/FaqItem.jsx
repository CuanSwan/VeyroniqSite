import { useId, useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="vq-accordion-item" data-open={open}>
      <button
        type="button"
        className="vq-accordion-question"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span className="vq-accordion-icon" aria-hidden="true" />
      </button>
      <div className="vq-accordion-answer" id={answerId} role="region">
        <p>{answer}</p>
      </div>
    </div>
  );
}
