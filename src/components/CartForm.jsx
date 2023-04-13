import { useState, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Page, Text, Document, View } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import emailjs from "@emailjs/browser";

const CartForm = () => {
  const current = new Date();

  const time =
    current.toLocaleDateString("es-AR") +
    " " +
    current.toLocaleTimeString("es-AR");

  const MySwal = withReactContent(Swal);
  const myAlert = (ord) => {
    MySwal.fire({
      title: `Gracias por la Compra ${nombre}`,

      icon: "success",
      confirmButtonText: "aceptar",
      html: (
        <>
          <p>ID de Compra:{ord}</p>
          <PDFDownloadLink
            style={{ color: "red" }}
            document={<BuyOrderPdf />}
            fileName={`${nombre}-recibo-de-compra`}
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Orden De Compra.pdf"
            }
          </PDFDownloadLink>
        </>
      ),
    });
  };

  const BuyOrderPdf = () => {
    return (
      <Document>
        <Page style={{ backgroundColor: "tomato" }}>
          <Text>Fecha de compra: {time}</Text>
          <Text>Nombre: {nombre}</Text>
          <Text>Email: {email}</Text>
          {cart.map((prod) => (
            <div className="pdfReader" key={prod.id}>
              <View
                style={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  border: "solid 1 white",
                  marginTop: "30",
                  backgroundColor: "black",
                }}
              >
                <Text>Producto: {prod.nombre}</Text>
                <Text>ID: {prod.id}</Text>
                <Text>Cantidad: {prod.quantity}</Text>
                <Text>Precio: {prod.precio}</Text>
              </View>
            </div>
          ))}
          <Text
            style={{ textAlign: "center", fontSize: "40", marginTop: "30" }}
          >
            Total:$
            {cart.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.precio * currentValue.quantity,
              0
            )}
          </Text>
        </Page>
      </Document>
    );
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const { cart,setCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();

  const templateParams = {
    nombre,
    email,

    total: cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.precio * currentValue.quantity,
      0
    ),
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre == "" || email == "") {
      MySwal.fire({
        title: `Complete los datos`,

        icon: "warning",
        confirmButtonText: "aceptar",
      });
    } else {
      emailjs
        .send(
          "service_195465u",
          "template_0ra5y74",
          templateParams,
          "dYUHrf6kqr3U9OVD8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      addDoc(ordersCollection, order).then(({ id }) => myAlert(id));

      setCart([])
    }
  };

  const order = {
    nombre,
    email,
    items: cart.map((prod) => ({
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      quantity: prod.quantity,
    })),
    total: cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.precio * currentValue.quantity,
      0
    ),
  };

  return (
    <div>
      <div className="formulario">
        <div className="form-container">
          <p>Login</p>
          <form ref={form} onSubmit={handleSubmit} className="form">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="input"
              placeholder="Enter yout email"
            />
            <label>Nombre</label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              name="nombre"
              className="input"
              placeholder="Nombre"
            />
            <button disabled={nombre.trim() == ""} type="submit" value="send">
              Finalizar Compra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
