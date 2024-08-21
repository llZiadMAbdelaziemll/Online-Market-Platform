import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Small from "../../ui/Small";
import { formatCurrency } from "../../../utils/helpers";
import { useCartProducts } from "../cart/useCartProducts";
import StarRating from "../../../utils/StarRating";
import Textarea from "../../../dashboard/ui/Textarea";
import Input from "../../../dashboard/ui/Input";
import FormRow from "../../../dashboard/ui/FormRow";
import Button from "../../../application/ui/Button";
import { useUser } from "../auth/useUser";
import { useCreateOrder } from "../../../dashboard/features/orders/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { useEditProduct } from "../../../dashboard/features/products/useEditProduct";
import { useDeleteFromCart } from "../cart/useDeleteFromCart";

const StyledCheckout = styled.section`
  margin: 10rem 0 5rem;
  & > div > div {
    align-items: flex-start;
    gap: 2rem;
  }

  & input {
    background-color: white;
  }
`;

const Left = styled.div`
  flex-grow: 1;
  max-width: 33.333%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  & h4 {
    margin-bottom: 0;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  padding: 15px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  & div.btw {
    display: flex;
    justify-content: space-between;
  }
  & div.total {
    display: flex;
    justify-content: space-between;
    padding-top: 1.9rem;
    border-top: 1px solid #e9e9e9;

    & p {
      font-size: 1.6rem;
      font-weight: 600;
      color: #2b2b2d;
      font-family: "Manrope", sans-serif;
      line-height: 24px;
      margin-bottom: 0;
    }
  }
  & span {
    color: #7a7a7a;
    font-size: 1.4rem;

    letter-spacing: 0;
  }
`;
const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  padding: 15px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  & h5 {
    font-size: 1.5rem;
  }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Radio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.35rem;
    cursor: pointer;
    color: #7a7a7a;
    letter-spacing: 0;
  }
`;
const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  & textarea {
    background-color: white;
    font-size: 1.3rem;
  }
`;
const PaymentImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;
  padding: 15px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
`;
const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: black !important;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start !important;
  gap: 0.8rem;
  & h5 {
    margin-bottom: 0;
  }
`;

const Price = styled.span`
  color: var(--color-green-400) !important;
  font-size: 1.6rem !important;
  font-weight: 700;
`;
const Photo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & img {
    width: 80px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
  }
`;
const Right = styled.div`
  flex-grow: 2;
  /* border: 1px solid #e9e9e9;
  padding: 15px;
  border-radius: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const AddressOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  & small {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Billing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border: 1px solid #e9e9e9;
  padding: 15px;
  border-radius: 5px;
`;
export default function CheckoutDetails() {
  const [userRating, setUserRating] = useState("");

  const { isLoading, products } = useCartProducts();
  const [selectedOption, setSelectedOption] = useState("existing"); // Default to 'new'
  const [addressValue, setAddressValue] = useState(""); // Default to 'new'
  const { user } = useUser();
  const { isCreating, createOrderFn } = useCreateOrder();
  const { isEditing, editProduct } = useEditProduct();
  const navigate = useNavigate();
  const { isDeleting, deleteFromCart } = useDeleteFromCart();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const subTotalAmount = products?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  console.log(subTotalAmount);
  const handleSubmit = (event) => {
    event.preventDefault();
    const customer =
      user?.user_metadata?.firstName + " " + user?.user_metadata?.lastName;
    const address =
      selectedOption === "new" ? addressValue : user?.user_metadata?.address;

    products.map((product) => {
      createOrderFn({
        image: product.image,
        product: product.name,
        customer,
        amount: product.price,
        quantity: product.quantity,
        address,
        product_id: product.product_id,
        user_id: product.user_id,
      });
      editProduct({
        newProductData: {
          ...product.products,
          purchased: product.products.purchased + 1,
          stock: product.products.stock - 1,
        },
        id: product.product_id,
      });
      deleteFromCart(product.id);
    });

    navigate("/cart");
  };
  return (
    <StyledCheckout>
      <Container>
        <Row>
          <Left>
            <Payment>
              <Heading as="h4">Payment Method</Heading>
              <Small>
                Please select the preferred shipping method to use on this order
              </Small>
              <Options>
                <Radio>
                  <Heading as="h5">Free Shipping</Heading>
                  <div>
                    <input type="radio" />
                    <label>Rate - $0 .00</label>
                  </div>
                </Radio>
                <Radio>
                  <Heading as="h5">Flat Rate</Heading>

                  <div>
                    <input type="radio" />
                    <label>Rate - $5.00</label>
                  </div>
                </Radio>
              </Options>
              <Comment>
                <Heading as="h5">Add Comments About Your Order</Heading>
                <Textarea placeholder="Comments" />
              </Comment>
            </Payment>
            <PaymentImages>
              <Heading as="h4">Payment Method</Heading>
              <img src="./payment/payment.png" />
            </PaymentImages>
          </Left>
          <Right>
            <Summary>
              <Heading as="h4">Summary</Heading>
              <div className="btw">
                <span>Sub-Total</span>
                <Amount>{formatCurrency(subTotalAmount)}</Amount>
              </div>
              <div className="btw">
                <span>Delivery Charges</span>
                <Amount>{formatCurrency(5)}</Amount>
              </div>
              <div className="total">
                <p>Total Amount</p>
                <p>{formatCurrency(subTotalAmount + 5)}</p>
              </div>
              <Cart>
                {products?.map((product) => {
                  return (
                    <Product key={product.id}>
                      <Photo>
                        <img src={product.image.at(0)} />
                      </Photo>

                      <Content>
                        <Heading as="h5">{product.name}</Heading>
                        <StarRating
                          size={15}
                          onSetRating={setUserRating}
                          color="#f5885f"
                        />

                        <Price>{formatCurrency(product.price)}</Price>
                      </Content>
                    </Product>
                  );
                })}
              </Cart>
            </Summary>
            <Billing>
              <Heading as="h4">Billing Details</Heading>
              <form>
                <Heading as="h5">Checkout Options</Heading>
                <AddressOptions>
                  <div>
                    <Small>
                      <input
                        type="radio"
                        value="existing"
                        checked={selectedOption === "existing"}
                        onChange={handleOptionChange}
                      />
                      I want to use an existing address
                    </Small>
                  </div>
                  <div>
                    <Small>
                      <input
                        type="radio"
                        value="new"
                        checked={selectedOption === "new"}
                        onChange={handleOptionChange}
                      />
                      I want to use a new address
                    </Small>
                  </div>
                </AddressOptions>
              </form>

              <form onSubmit={handleSubmit}>
                {selectedOption === "new" && (
                  <FormRow label="Address">
                    <Input
                      type="text"
                      value={addressValue}
                      onChange={(e) => setAddressValue(e.target.value)}
                    />
                  </FormRow>
                )}
                <div>
                  <Button onClick={handleSubmit}>Place Order</Button>
                </div>
              </form>
            </Billing>
          </Right>
        </Row>
      </Container>
    </StyledCheckout>
  );
}
