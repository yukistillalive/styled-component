const Input = styled.input`
  border: 2px solid ${({ status }) =>
    status === 'error' ? '#e74c3c'
    : status === 'success' ? '#00b894'
    : '#dfe6e9'};
  outline: none;
`;

export default function Demo2() {
    const [email, setEmail] = useState('');
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            status={email === '' ? undefined : emailValid ? 'success' : 'error'}
        />
    );
}

import { useState } from "react";
import styled from "styled-components";

