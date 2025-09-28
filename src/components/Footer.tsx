```typescript
// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

/**
 * Interface para as propriedades do componente Footer.
 */
interface FooterProps {
  companyName: string;
  year: number;
}

/**
 * Componente Footer para exibir informações de contato, links úteis e copyright.
 * @param {FooterProps} props - As propriedades do componente.
 * @returns {JSX.Element} O componente Footer.
 */
const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contato</h3>
          <p>Email: contato@exemplo.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </div>

        <div className={styles.links}>
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="/sobre" aria-label="Sobre nós">Sobre nós</a></li>
            <li><a href="/servicos" aria-label="Serviços">Serviços</a></li>
            <li><a href="/portfolio" aria-label="Portfólio">Portfólio</a></li>
            <li><a href="/contato" aria-label="Contato">Contato</a></li>
          </ul>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {year} {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

```css
/* src/components/Footer.module.css */
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact,
.links,
.copyright {
  margin-bottom: 20px;
}

.contact h3,
.links h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 5px;
}

.links a {
  color: #fff;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.copyright p {
  font-size: 0.9em;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .contact,
  .links,
  .copyright {
    width: 100%;
    text-align: center;
  }
}
```