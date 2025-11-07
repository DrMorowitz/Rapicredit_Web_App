'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Zap, FileCheck, Percent, Camera, Upload, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-50 to-white backdrop-blur-sm border-b border-gray-100 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
          {/* Logo - 250% bigger, moved 3% down */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img
              src="/azul_rapicredit2.svg"
              alt="RapiCredit Logo"
              className="h-50 w-auto object-contain"
              style={{ 
                height: '200px',
                transform: 'translateY(3%)' 
              }}
            />
          </Link>
          
          {/* Navigation - Interactive hover effects */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/nosotros" className="relative text-lg font-medium text-gray-700 hover:text-rapicredit-primary transition-all duration-300 group">
              <span className="relative z-10">Nosotros</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-rapicredit-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/servicios" className="relative text-lg font-medium text-gray-700 hover:text-rapicredit-primary transition-all duration-300 group">
              <span className="relative z-10">Servicios</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-rapicredit-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/faq" className="relative text-lg font-medium text-gray-700 hover:text-rapicredit-primary transition-all duration-300 group">
              <span className="relative z-10">FAQ</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-rapicredit-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link href="/contacto" className="relative text-lg font-medium text-gray-700 hover:text-rapicredit-primary transition-all duration-300 group">
              <span className="relative z-10">Contacto</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-rapicredit-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </nav>

          {/* Action Buttons - Enhanced interactivity */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://wa.me/507XXXXXXXX" 
              className="hidden md:inline-flex items-center px-6 py-2.5 text-base font-semibold text-rapicredit-primary bg-white border-2 border-rapicredit-primary rounded-xl hover:bg-rapicredit-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              WhatsApp
            </Link>
            <Link 
              href="/solicitud" 
              className="inline-flex items-center px-6 py-2.5 text-base font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Solicitar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        {/* Subtle Money-themed Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-rapicredit-secondary/20 to-transparent"></div>
        
        {/* Floating Dollar Signs - Multiplied */}
        <div className="absolute inset-0">
          {/* Orange Dollar Signs - Multiple Layers */}
          <div className="absolute top-16 left-1/4 text-orange-400/30 text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>$</div>
          <div className="absolute top-24 right-1/5 text-orange-400/25 text-xl animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3.2s'}}>$</div>
          <div className="absolute top-12 left-1/5 text-orange-400/20 text-base animate-ping" style={{animationDelay: '1.8s', animationDuration: '3.4s'}}>$</div>
          <div className="absolute top-32 right-1/3 text-orange-300/25 text-lg animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}>$</div>
          <div className="absolute top-28 left-1/6 text-orange-400/35 text-base animate-bounce" style={{animationDelay: '0.4s', animationDuration: '3.6s'}}>$</div>
          <div className="absolute top-40 right-1/6 text-orange-300/22 text-sm animate-ping" style={{animationDelay: '1.4s', animationDuration: '2.8s'}}>$</div>
          <div className="absolute top-48 left-1/3 text-orange-400/28 text-lg animate-pulse" style={{animationDelay: '0.8s', animationDuration: '4.2s'}}>$</div>
          <div className="absolute top-56 right-1/2 text-orange-300/30 text-base animate-bounce" style={{animationDelay: '2.2s', animationDuration: '3.7s'}}>$</div>
          <div className="absolute top-60 left-1/5 text-orange-400/26 text-xl animate-ping" style={{animationDelay: '0.6s', animationDuration: '3.1s'}}>$</div>
          <div className="absolute top-36 right-1/4 text-orange-300/32 text-sm animate-pulse" style={{animationDelay: '2.8s', animationDuration: '2.9s'}}>$</div>
          
          <div className="absolute bottom-40 left-1/5 text-orange-400/35 text-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>$</div>
          <div className="absolute bottom-48 right-1/4 text-orange-400/20 text-lg animate-ping" style={{animationDelay: '1.2s', animationDuration: '3.6s'}}>$</div>
          <div className="absolute bottom-28 left-1/3 text-orange-400/25 text-lg animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.8s'}}>$</div>
          <div className="absolute bottom-36 right-1/6 text-orange-400/22 text-base animate-bounce" style={{animationDelay: '0.3s', animationDuration: '4.5s'}}>$</div>
          <div className="absolute bottom-44 left-1/6 text-orange-400/25 text-sm animate-pulse" style={{animationDelay: '0.7s', animationDuration: '4.1s'}}>$</div>
          <div className="absolute bottom-20 left-1/2 text-orange-400/30 text-base animate-bounce" style={{animationDelay: '1.1s', animationDuration: '3.9s'}}>$</div>
          <div className="absolute bottom-52 right-1/5 text-orange-300/28 text-lg animate-ping" style={{animationDelay: '2.4s', animationDuration: '3.3s'}}>$</div>
          <div className="absolute bottom-32 left-1/4 text-orange-400/24 text-xl animate-pulse" style={{animationDelay: '1.7s', animationDuration: '2.7s'}}>$</div>
          <div className="absolute bottom-24 right-1/3 text-orange-300/26 text-base animate-bounce" style={{animationDelay: '0.9s', animationDuration: '4.3s'}}>$</div>
          <div className="absolute bottom-16 left-1/6 text-orange-400/18 text-sm animate-ping" style={{animationDelay: '2.6s', animationDuration: '3.4s'}}>$</div>
          
          {/* Additional Right Side Dollar Signs */}
          <div className="absolute top-20 right-1/8 text-orange-400/28 text-lg animate-pulse" style={{animationDelay: '0.2s', animationDuration: '3.5s'}}>$</div>
          <div className="absolute top-44 right-1/12 text-orange-300/24 text-base animate-bounce" style={{animationDelay: '1.6s', animationDuration: '2.9s'}}>$</div>
          <div className="absolute top-52 right-2/3 text-orange-400/30 text-xl animate-ping" style={{animationDelay: '2.3s', animationDuration: '4.1s'}}>$</div>
          <div className="absolute top-64 right-1/7 text-orange-300/22 text-sm animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.8s'}}>$</div>
          <div className="absolute bottom-60 right-1/8 text-orange-400/26 text-lg animate-bounce" style={{animationDelay: '1.3s', animationDuration: '3.2s'}}>$</div>
          <div className="absolute bottom-56 right-1/12 text-orange-300/32 text-base animate-ping" style={{animationDelay: '2.7s', animationDuration: '3.6s'}}>$</div>
          <div className="absolute bottom-40 right-2/3 text-orange-400/20 text-xl animate-pulse" style={{animationDelay: '0.1s', animationDuration: '4.4s'}}>$</div>
          <div className="absolute bottom-12 right-1/7 text-orange-300/28 text-base animate-bounce" style={{animationDelay: '1.9s', animationDuration: '2.6s'}}>$</div>
          
          {/* White sparkles */}
          <div className="absolute top-40 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/5 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>
          <div className="absolute top-20 left-1/6 w-0.5 h-0.5 bg-white/35 rounded-full animate-pulse"></div>
          <div className="absolute top-52 right-1/6 w-1 h-1 bg-white/25 rounded-full animate-ping"></div>
          <div className="absolute bottom-24 left-1/4 w-0.5 h-0.5 bg-white/45 rounded-full animate-bounce"></div>
          
          {/* Blue sparkles */}
          <div className="absolute top-28 right-1/5 w-0.5 h-0.5 bg-blue-300/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-28 left-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-48 left-1/5 w-0.5 h-0.5 bg-blue-300/50 rounded-full animate-bounce"></div>
          <div className="absolute bottom-48 right-1/3 w-1 h-1 bg-blue-400/35 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Main Title - Black font weight */}
              <h1 className="hero-title text-4xl md:text-6xl text-white leading-tight" 
                  style={{ fontFamily: 'var(--font-opaque)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                <span style={{ fontWeight: 900 }}>Préstamos</span>{' '}
                <span style={{ fontWeight: 700 }}>rápidos</span>{' '}
                <span style={{ fontWeight: 800 }}>y seguros</span><br/>
                <span style={{ fontWeight: 600, fontStyle: 'italic' }}>en Panamá</span>
              </h1>
              
              {/* Subtitle - Medium weight */}
              <p className="hero-subtitle text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                 style={{ fontFamily: 'var(--font-opaque)', fontWeight: 500 }}>
                Aprobación en minutos. Dinero en tu cuenta en 24 horas.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
                {/* Primary Button - Bold weight */}
                <Link 
                  href="/solicitud"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-lg text-rapicredit-primary bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105 border-2 border-orange-400/20"
                  style={{ fontFamily: 'var(--font-opaque)', fontWeight: 700 }}
                >
                  Solicita tu préstamo ahora
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                
                {/* Secondary Button - SemiBold weight */}
                <Link 
                  href="https://wa.me/507XXXXXXXX"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-lg text-white bg-white/20 border-2 border-white/40 rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-orange-400/10 transform hover:scale-105"
                  style={{ fontFamily: 'var(--font-opaque)', fontWeight: 600 }}
                >
                  <Smartphone className="w-5 h-5 mr-3" />
                  Habla con un asesor
                </Link>
              </div>
              
              {/* Feature badges - Light and Regular weights */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-10 text-white/80 text-sm">
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-orange-400/20"
                     style={{ fontFamily: 'var(--font-opaque)', fontWeight: 400 }}>
                  <CheckCircle className="w-4 h-4 mr-2 text-orange-400" />
                  Proceso Transparente
                </div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
                     style={{ fontFamily: 'var(--font-opaque)', fontWeight: 300 }}>
                  <CheckCircle className="w-4 h-4 mr-2 text-white" />
                  Certificaciones Internacionales
                </div>
                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-orange-400/20"
                     style={{ fontFamily: 'var(--font-opaque)', fontWeight: 500 }}>
                  <CheckCircle className="w-4 h-4 mr-2 text-orange-400" />
                  Cotiza 100% en línea
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Image - Woman with Cash */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1762488711/mujer_cash_qbs1se.png"
            alt="Woman with cash background"
            className="absolute bottom-0 left-0 h-full w-auto object-cover opacity-70"
            style={{ 
              height: '95%',
              bottom: '0',
              left: '0',
              objectFit: 'cover',
              objectPosition: 'bottom left'
            }}
          />
        </div>
        
        {/* Mobile Background Image - Centered */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1762488711/mujer_cash_qbs1se.png"
            alt="Woman with cash background"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-cover opacity-35"
            style={{ 
              height: '95%',
              bottom: '0',
              objectFit: 'cover',
              objectPosition: 'bottom center'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-rapicredit-primary text-sm font-semibold uppercase tracking-wide">Proceso simple</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Obtén tu préstamo en 3 pasos
            </h2>
            <p className="text-lg text-gray-600">
              Rápido, fácil y sin complicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-rapicredit-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Toma foto de tu cédula
              </h3>
              <p className="text-gray-600">
                Usa la cámara de tu celular para tomar foto de tu cédula. Seguro y encriptado.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-rapicredit-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Completa tu información
              </h3>
              <p className="text-gray-600">
                Llena el formulario inteligente en menos de 5 minutos. Sin papeles complicados.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-rapicredit-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ¡Recibe tu dinero!
              </h3>
              <p className="text-gray-600">
                Aprobación en minutos. Transferencia directa a tu cuenta bancaria en 24 horas.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/solicitud"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-primary rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Comenzar ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir RapiCredit?
            </h2>
            <p className="text-lg text-gray-600">
              Hacemos que obtener un préstamo sea fácil y rápido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-rapicredit-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-rapicredit-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Respuesta inmediata
              </h3>
              <p className="text-gray-600 text-sm">
                Aprobación en minutos, no días. Sin esperas innecesarias.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-rapicredit-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-rapicredit-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Requisitos mínimos
              </h3>
              <p className="text-gray-600 text-sm">
                Solo documentos básicos. Sin complicaciones ni requisitos imposibles.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-rapicredit-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-rapicredit-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                100% seguro
              </h3>
              <p className="text-gray-600 text-sm">
                Tus datos protegidos con encriptación de nivel bancario.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-rapicredit-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6 text-rapicredit-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tasas competitivas
              </h3>
              <p className="text-gray-600 text-sm">
                Las mejores tasas del mercado panameño para préstamos personales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Parameters Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Image - Family with Plane - Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1762490062/fam_with_plane_he4xl6.png"
            alt="Family with plane background"
            className="absolute bottom-0 right-0 h-full w-auto object-cover opacity-70"
            style={{ 
              height: '95%',
              bottom: '0',
              right: '0',
              objectFit: 'cover',
              objectPosition: 'bottom right'
            }}
          />
        </div>
        
        {/* Mobile Background Image - Centered */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1762490062/fam_with_plane_he4xl6.png"
            alt="Family with plane background"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-cover opacity-35"
            style={{ 
              height: '95%',
              bottom: '0',
              objectFit: 'cover',
              objectPosition: 'bottom center'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Préstamos a tu medida
              </h2>
              <p className="text-lg text-gray-600">
                Montos y plazos flexibles para cualquier necesidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Montos disponibles</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Mínimo</span>
                    <span className="text-2xl font-bold">B/. 500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Máximo</span>
                    <span className="text-2xl font-bold">B/. 10,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-rapicredit-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Plazos flexibles</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Mínimo</span>
                    <span className="text-2xl font-bold">6 meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Máximo</span>
                    <span className="text-2xl font-bold">60 meses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/solicitud"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-primary rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Calcular mi préstamo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para obtener tu préstamo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Completa tu solicitud en menos de 5 minutos y recibe una respuesta inmediata
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/solicitud"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-rapicredit-primary bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Solicitar préstamo ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="https://wa.me/507XXXXXXXX"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-xl hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Hablar con asesor
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Proceso 100% en línea
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Respuesta en minutos
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Sin sorpresas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rapicredit-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="https://res.cloudinary.com/dp3gvxyft/image/upload/v1762392183/blanco_rapicredit_t5gi1s.svg"
                  alt="RapiCredit Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">RapiCredit</span>
              </div>
              <p className="text-white/70 text-sm">
                Préstamos personales rápidos y seguros en Panamá. Tu confianza es nuestra prioridad.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/servicios" className="hover:text-white transition-colors">Préstamos Personales</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors">Préstamos Rápidos</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors">Consulta APC</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                <li><Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>📞 +507 XXXX-XXXX</li>
                <li>📧 info@rapicredit.com</li>
                <li>📍 Ciudad de Panamá, PA</li>
                <li>🕒 Lun-Vie: 8:00am - 6:00pm</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-white/70 text-sm">
            <p>&copy; 2024 RapiCredit. Todos los derechos reservados.</p>
            <p>Financiera autorizada y regulada en Panamá.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}