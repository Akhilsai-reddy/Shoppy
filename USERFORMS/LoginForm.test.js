import LoginForm from "./LoginForm";
import UserContext from "../USERCONTEXT/UserContext";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
   
  test("Render Heading correctly", () => {
    render(
        <MemoryRouter>
          <UserContext>
            <LoginForm />
          </UserContext>
        </MemoryRouter>
      );
    const Heading = screen.getByText("Login Form");
    expect(Heading).toBeInTheDocument();
  
  });
test('Renders placeholder as Enter email',()=>{
    render(
        <MemoryRouter>
          <UserContext>
            <LoginForm />
          </UserContext>
        </MemoryRouter>
      );
    const email=screen.getByPlaceholderText('Enter email')
    expect(email).toBeInTheDocument();
})
test('Renders placeholder as Enter password',()=>{
    render(
        <MemoryRouter>
          <UserContext>
            <LoginForm />
          </UserContext>
        </MemoryRouter>
      );
    const password=screen.getByPlaceholderText('Enter Password')
    expect(password).toBeInTheDocument();
})
test('Renders Button',()=>{
    render(
        <MemoryRouter>
          <UserContext>
            <LoginForm />
          </UserContext>
        </MemoryRouter>
      );
    const email=screen.getByRole('button')
    expect(email).toBeEnabled()
})
test('user input for email and password',async()=>{
    render(
        <MemoryRouter>
          <UserContext>
            <LoginForm />
          </UserContext>
        </MemoryRouter>
      );
      const email=screen.getByPlaceholderText('Enter email')
      const password=screen.getByPlaceholderText('Enter Password')
     await userEvent.type(email,"somthing@gmail.com")
     await userEvent.type(password,"somthing123")

      const userEmail= screen.getByText('somthing@gmail.com',{exact:false})
     expect(userEmail).toBeInTheDocument()
})

});
