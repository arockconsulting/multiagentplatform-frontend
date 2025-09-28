```typescript
import styles from './ContactForm.module.css';

/**
 * Interface para as propriedades do componente ContactForm.
 */
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

/**
 * Interface para os dados do formulário de contato.
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Componente ContactForm para coletar informações de contato dos usuários.
 *
 * @param {ContactFormProps} props - As propriedades do componente.
 * @returns {JSX.Element} O elemento JSX representando o formulário de contato.
 */
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  /**
   * Manipula o envio do formulário.
   *
   * @param {React.FormEvent} event - O evento de envio do formulário.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData: ContactFormData = {
      name,
      email,
      message,
    };

    onSubmit(formData);

    // Limpa os campos do formulário após o envio.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nome:
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Mensagem:
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          aria-required="true"
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Enviar Mensagem
      </button>
    </form>
  );
};

export default ContactForm;
```