'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contactPageContent, type ContactInfoKind } from '@/lib/content/contactPage'

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [_isSubmitting, setIsSubmitting] = useState(false)
  const [_submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const _handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const _handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfoIcons: Record<ContactInfoKind, React.ReactNode> = {
    email: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    address: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    companyNumber: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center bg-linear-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 py-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-4xl! font-bold mb-2 md:mb-3"
            >
              {contactPageContent.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug text-justify [text-align-last:start]"
            >
              {contactPageContent.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-primary-900 mb-6"
              >
                {contactPageContent.contactInfoTitle}
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6 mb-8">
                {contactPageContent.contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    whileHover={{ x: 5 }}
                    className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                      info.link ? 'border-primary-500 cursor-pointer' : 'border-gray-300'
                    }`}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                          {contactInfoIcons[info.kind]}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                          {contactInfoIcons[info.kind]}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Opening Hours */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md border border-primary-100"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {contactPageContent.openingHours.title}
                </h3>
                <div className="space-y-3">
                  {contactPageContent.openingHours.items.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-primary-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center"
            >
              {contactPageContent.map.title}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100"
            >
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src={contactPageContent.map.iframeSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6 bg-primary-50">
                <p className="text-gray-700 text-center">
                  <strong>{contactPageContent.map.addressLabel}</strong>{' '}
                  {contactPageContent.map.address}
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href={contactPageContent.map.openInGoogleMapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {contactPageContent.map.openInGoogleMapsLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
