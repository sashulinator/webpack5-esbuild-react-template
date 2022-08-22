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
              <div style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
                <div>
                  <div>Service Name</div>
                </div>
                <Field<string> name="username" required component="input" />
                <Field<string> name="password" required component="input" />
                <button type="submit">login</button>
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}
