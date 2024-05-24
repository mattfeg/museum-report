import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { styled } from 'styled-components';
import { Button } from 'primereact/button';
import { useState } from 'react';

const LoginContainer = styled.section``;

export const Login = () => {

    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <LoginContainer className="h-screen flex justify-content-center align-items-center surface-200 p-3 md:p-0">
            <form className='w-12 md:w-4 surface-0 p-4 border-round-sm'>
                <h3 className='text-center'>Welcome to Museum Report</h3>
                <InputText
                    type="email"
                    placeholder="email@email.com"
                    className='w-full mb-3'
                />
                <IconField iconPosition='right' className='mb-3'>
                    <InputIcon
                        onClick={() => setVisiblePassword(!visiblePassword)}
                        className={`pi ${visiblePassword ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                    />
                    <InputText
                        type={visiblePassword ? 'text' : 'password'}
                        placeholder='**********'
                        maxLength={10}
                        className='w-full'
                    />
                </IconField>

                <Button
                    type="submit"
                    label="Enter"
                    className='w-full'
                />
            </form>
        </LoginContainer>
    );
};

export default Login
