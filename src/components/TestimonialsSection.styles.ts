```typescript
import styles from './TestimonialsSection.module.css';

/**
 * Interface para as propriedades do componente TestimonialsSection.
 */
interface TestimonialsSectionProps {
  testimonials: {
    id: number;
    name: string;
    title: string;
    text: string;
    image: string;
  }[];
}

/**
 * Componente React para exibir uma seção de depoimentos.
 * @param {TestimonialsSectionProps} props - As propriedades do componente.
 * @returns {JSX.Element} O elemento JSX que representa a seção de depoimentos.
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>O que nossos clientes dizem</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className={styles.testimonialImage} />
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <p className={styles.testimonialName}>{testimonial.name}</p>
              <p className={styles.testimonialTitle}>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
```
```typescript
/* TestimonialsSection.module.css */

.testimonialsSection {
  padding: 40px;
  background-color: #f9f9f9;
  text-align: center;
}

.sectionTitle {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.testimonialsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.testimonialCard {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 300px; /* Largura base para telas maiores */
}

.testimonialImage {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.testimonialContent {
  /* Estilos para o conteúdo do depoimento */
}

.testimonialText {
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
}

.testimonialName {
  font-weight: bold;
  color: #333;
}

.testimonialTitle {
  color: #777;
  font-size: 0.9rem;
}

/* Media query para telas menores (ex: mobile) */
@media (max-width: 768px) {
  .testimonialCard {
    width: 100%; /* Ocupa a largura total em telas menores */
  }

  .testimonialsContainer {
    flex-direction: column; /* Empilha os cards em telas menores */
    align-items: center; /* Centraliza os itens */
  }
}

/* Media query para telas médias (ex: tablets) */
@media (min-width: 769px) and (max-width: 1200px) {
  .testimonialCard {
    width: 45%; /* Ocupa quase metade da largura em telas médias */
  }
}
```