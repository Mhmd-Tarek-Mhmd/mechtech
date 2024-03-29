import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { textToURL } from "../utils/helpers";

import styles from "../styles/category.module.css";
import Card from "../components/Card";

const Category = () => {
  const [category, setCategory] = useState(null);
  const products = useSelector((state) => state.products);
  useEffect(() => {
    if (products) {
      setCategory(
        Object.keys(products).filter(
          (category) =>
            textToURL(category) === window.location.pathname.substr(10)
        )[0]
      );
    }
  }, [products]);

  return (
    category && (
      <>
        <header className={styles.hero}>
          <h1>{category}</h1>
        </header>

        <main className={styles.category}>
          {products[category].map((product) => (
            <Card
              key={product.id}
              bg={product.product_image1}
              href={`/product/${textToURL(category)}/${textToURL(
                product.product_name
              )}`}
            >
              <strong>{product.product_name}</strong>
            </Card>
          ))}
        </main>
      </>
    )
  );
};

export default Category;
