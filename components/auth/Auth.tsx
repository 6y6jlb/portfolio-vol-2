'use client'
import { auth } from '@/service/auth'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { AuthForm } from './Form'
import { DEFAULT_AUTH_FORM } from './const'
import styles from './styles.module.css'
import { IAuthForm } from './types'

export default function Auth() {
  const [form, setForm] = React.useState(DEFAULT_AUTH_FORM as IAuthForm)

  const t = useTranslations("common");
  const locale = useLocale()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const result = await auth({ ...form, locale });
      setForm(DEFAULT_AUTH_FORM)
      toast(t('notification.auth.success'), { hideProgressBar: true, type: 'success' })
    } catch (error: any) {
      console.log(error)
      toast(t('notification.auth.error'), { hideProgressBar: true, type: 'error' })
    }
  }
  
  return (
    <div className={styles.container}>
      <p>{t(form.already_register ? 'auth.description-login' : 'auth.description-register')}</p>
      <AuthForm onSubmit={onSubmit} formData={form} onChange={setForm}/>
    </div>
  )
}