import { Button, InputField } from '@admiral-ds/react-ui'

import './index.css'

import axios from 'axios'
import React from 'react'
import { Field, Form } from 'react-final-form'

import { LoginResponse } from '@/api/types'
import history from '@/app/history'
import { errorMessage } from '@/shared/toast'

export default function Login(): JSX.Element {
  async function onSubmit(data: Record<string, unknown>) {
    try {
      const response = await axios.post<LoginResponse>('api/v1/security/login', {
        ...data,
        provider: 'db',
        refresh: true,
      })
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
      history.push('/analytic-1')
    } catch (e) {
      errorMessage('Неверный логин или пароль')
    }
  }

  return (
    <div className="Main Login">
      <Form
        onSubmit={onSubmit}
        render={(formProps) => {
          return (
            <form onSubmit={formProps.handleSubmit}>
              <h1 style={{ textAlign: 'center' }}>ANALYTICS</h1>
              <Field<string> name="username">{({ input }) => <InputField {...input} />}</Field>
              <Field<string> name="password" required>
                {({ input }) => <InputField {...input} />}
              </Field>
              <Button type="submit">Войти</Button>
            </form>
          )
        }}
      />
    </div>
  )
}
