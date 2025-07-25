import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export function LoginComponent() {
  return (
    <div className="flex justify-center items-center h-screen mx-5">
      <Card className="max-w-md w-full"> 
        <form className="flex flex-col gap-6">
          <div>
            <div className="mb-1 block"> 
              <Label htmlFor="email1" className="text-xl"> 
                Your email
              </Label>
            </div>
            <TextInput 
              id="email1" 
              type="email" 
              placeholder="name@flowbite.com" 
              required 
              className="text-lg p-1" 
              sizing="lg" 
            />
          </div>
          <div>
            <div className="mb-1 block"> 
              <Label htmlFor="password1" className="text-xl"> 
                Your password
              </Label>
            </div>
            <TextInput 
              id="password1" 
              type="password" 
              required 
              className="text-lg p-1" 
              sizing="lg" 
            />
          </div>
          <div className="flex items-center gap-3"> 
            <Checkbox id="remember" className="h-6 w-6" /> 
            <Label htmlFor="remember" className="text-lg"> 
              Remember me
            </Label>
          </div>
          <Button type="submit" size="xl" className="text-lg py-3"> 
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}