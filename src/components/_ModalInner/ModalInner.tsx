import React, { useState } from 'react'
import FormComponent from '../_Form/FormComponent'
import { Container, H3, H4, P, Senoras, SuccessContainer } from './styles'



// const Input = ({ handleSuccess }) => (
//   <Container>
//     <H3>Sign up</H3>
//     <P>See how many days are left to take off and go to Brazil!</P>
//     <FormComponent handleSuccess={handleSuccess} />
//   </Container>
// )

// const Success = () => (
//   <SuccessContainer>
//     <Senoras />
//     <H4>MARAVILHOSO!</H4>
//     <P>It's almost time for a real café vegano ☕ <br /> Bem forte.</P>

//   </SuccessContainer>
// )


const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return (
    <Container>
      {showSuccess ? (
        <SuccessContainer>
          <Senoras />
          <H4>MARAVILHOSO!</H4>
          <P>Toda ação abre caminhos 🌄</P>
        </SuccessContainer>
      ) : (
        <>
          <H3>Diga Oii!</H3>
          <P> E deixe uma mensagem:)</P>
          <FormComponent handleSuccess={handleSuccess} />
        </>
      )}
    </Container>
  );
}

export default ModalInner