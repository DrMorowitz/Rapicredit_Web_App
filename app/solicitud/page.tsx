'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Camera, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import CameraUpload from '@/components/ui/camera-upload'

export default function SolicitudPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Phase 1: Acerca de ti + Cédula upload
    tipo_persona: '',
    nacionalidad: 'Panameña',
    cedula_panameña: true,
    fecha_nacimiento: '',
    contacto_preferido: 'whatsapp',
    codigo_promocional: '',
    cedula_frontal_url: '',
    cedula_frontal_filename: '',
    cedula_trasera_url: '',
    cedula_trasera_filename: '',
    cedula_image_source: 'camera' as 'camera' | 'gallery',
    privacy_policy_accepted: false
  })
  const [uploadedImages, setUploadedImages] = useState({
    frontal: null as string | null,
    trasera: null as string | null
  })
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleImageUpload = (file: File, imageUrl: string, source: 'camera' | 'gallery', side: 'frontal' | 'trasera') => {
    // Update form data
    setFormData(prev => ({
      ...prev,
      [`cedula_${side}_url`]: imageUrl,
      [`cedula_${side}_filename`]: file.name,
      cedula_image_source: source
    }))

    // Update preview
    setUploadedImages(prev => ({
      ...prev,
      [side]: imageUrl
    }))

    // In real implementation, upload to your backend/storage here
    console.log(`Uploading ${side} image:`, { file, source })
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.tipo_persona &&
          formData.fecha_nacimiento &&
          uploadedImages.frontal && // At least frontal image required
          calculateAge(formData.fecha_nacimiento) >= 18 &&
          formData.privacy_policy_accepted
        )
      default:
        return true
    }
  }

  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  const isUnder18 = formData.fecha_nacimiento && calculateAge(formData.fecha_nacimiento) < 18

  const nextStep = () => {
    if (canProceedToNextStep()) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          {/* Logo - Same as landing page */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img
              src="/azul_rapicredit2.svg"
              alt="RapiCredit Logo"
              className="h-20 w-auto object-contain"
              style={{ 
                height: '200px',
                transform: 'translateY(3%)' 
              }}
            />
          </Link>

          <div className="text-sm text-gray-500">
            Guardado automático ✓
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-rapicredit-primary">Paso {currentStep} de 5</span>
              <span className="text-sm text-gray-500">{Math.round((currentStep / 5) * 100)}% completado</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 5) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span className={currentStep >= 1 ? 'text-rapicredit-primary font-medium' : ''}>Acerca de ti</span>
              <span className={currentStep >= 2 ? 'text-rapicredit-primary font-medium' : ''}>Tu préstamo</span>
              <span className={currentStep >= 3 ? 'text-rapicredit-primary font-medium' : ''}>Datos personales</span>
              <span className={currentStep >= 4 ? 'text-rapicredit-primary font-medium' : ''}>Domicilio</span>
              <span className={currentStep >= 5 ? 'text-rapicredit-primary font-medium' : ''}>Trabajo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Phase 1: Acerca de ti */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Step Header */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Acerca de ti
                </h1>
                <p className="text-lg text-gray-600">
                  Cuéntanos un poco sobre ti y toma foto de tu cédula
                </p>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
                {/* Personal Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Tipo de persona <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'empleado_privado', label: 'Empleado Sector Privado' },
                      { value: 'empleado_publico', label: 'Empleado Sector Público' },
                      { value: 'independiente', label: 'Trabajador Independiente' },
                      { value: 'jubilado', label: 'Pensionado/Jubilado' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, tipo_persona: option.value }))}
                        className={`p-4 text-left rounded-xl border-2 transition-colors ${
                          formData.tipo_persona === option.value
                            ? 'border-rapicredit-primary bg-rapicredit-primary/5 text-rapicredit-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Birth Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Fecha de Nacimiento <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.fecha_nacimiento}
                      onChange={(e) => setFormData(prev => ({ ...prev, fecha_nacimiento: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-rapicredit-primary/20 transition-colors ${
                        isUnder18 ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-rapicredit-primary'
                      }`}
                      max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                    />
                    {isUnder18 && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <span>⚠️ Debes ser mayor de 18 años para solicitar un préstamo</span>
                      </p>
                    )}
                    {formData.fecha_nacimiento && !isUnder18 && (
                      <p className="text-green-600 text-sm mt-1 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Edad válida: {calculateAge(formData.fecha_nacimiento)} años
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Medio de contacto preferido
                    </label>
                    <select
                      value={formData.contacto_preferido}
                      onChange={(e) => setFormData(prev => ({ ...prev, contacto_preferido: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-rapicredit-primary focus:outline-none focus:ring-2 focus:ring-rapicredit-primary/20 transition-colors"
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="telefono">Llamada telefónica</option>
                      <option value="email">Correo electrónico</option>
                    </select>
                  </div>
                </div>

                {/* Promotional Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Código Promocional <span className="text-sm text-gray-500">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.codigo_promocional}
                    onChange={(e) => setFormData(prev => ({ ...prev, codigo_promocional: e.target.value.toUpperCase() }))}
                    placeholder="PROMO2024"
                    className="w-full md:w-1/2 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-rapicredit-primary focus:outline-none focus:ring-2 focus:ring-rapicredit-primary/20 transition-colors"
                    maxLength={50}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Si tienes un código promocional, ingrésalo aquí para obtener beneficios especiales.
                  </p>
                </div>

                {/* Cédula Upload Section */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Foto de tu Cédula
                    </h3>
                    <p className="text-gray-600">
                      Toma una foto clara de tu cédula usando la cámara de tu celular
                    </p>
                  </div>

                  {/* Security Badge */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">100% Seguro y Encriptado</h4>
                        <p className="text-green-700 text-sm">
                          Tus imágenes están protegidas con encriptación de nivel bancario (SSL 256-bit). 
                          Solo personal autorizado puede acceder a tu información.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Uploads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frontal */}
                    <CameraUpload
                      onImageCapture={(file, imageUrl, source) => handleImageUpload(file, imageUrl, source, 'frontal')}
                      onError={(error) => console.error('Error uploading frontal:', error)}
                      label="Cédula"
                      side="frontal"
                      required={true}
                      helpText="Asegúrate que todos los datos sean legibles"
                      currentImage={uploadedImages.frontal}
                    />

                    {/* Trasera */}
                    <CameraUpload
                      onImageCapture={(file, imageUrl, source) => handleImageUpload(file, imageUrl, source, 'trasera')}
                      onError={(error) => console.error('Error uploading trasera:', error)}
                      label="Cédula"
                      side="trasera"
                      required={false}
                      helpText="Opcional pero recomendado para acelerar tu aprobación"
                      currentImage={uploadedImages.trasera}
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Policy Agreement */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={formData.privacy_policy_accepted}
                    onChange={(e) => setFormData(prev => ({ ...prev, privacy_policy_accepted: e.target.checked }))}
                    className="mt-1 h-4 w-4 text-rapicredit-primary focus:ring-rapicredit-primary border-gray-300 rounded"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-600 leading-relaxed">
                    Acepto los{' '}
                    <button
                      type="button"
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-rapicredit-primary underline hover:text-rapicredit-primary-hover transition-colors font-medium"
                    >
                      Términos y Condiciones y Políticas de Privacidad
                    </button>
                    {' '}de RapiCredit. Entiendo que mis datos serán tratados de acuerdo a estas políticas.
                  </label>
                </div>
                {!formData.privacy_policy_accepted && formData.tipo_persona && (
                  <p className="text-red-600 text-sm mt-2 ml-7">
                    ⚠️ Debes aceptar los términos y condiciones para continuar
                  </p>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Cancelar
                </Link>

                <button
                  onClick={nextStep}
                  disabled={!canProceedToNextStep()}
                  className={`inline-flex items-center px-8 py-3 font-semibold rounded-xl transition-colors ${
                    canProceedToNextStep()
                      ? 'text-white bg-gradient-primary hover:opacity-90'
                      : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                  }`}
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Other phases would go here */}
          {currentStep > 1 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fase {currentStep} - En desarrollo
              </h2>
              <p className="text-gray-600 mb-8">
                Esta fase del formulario está siendo desarrollada.
              </p>
              <button
                onClick={prevStep}
                className="inline-flex items-center px-6 py-3 text-rapicredit-primary bg-white border border-rapicredit-primary rounded-xl hover:bg-rapicredit-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Paso Anterior
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Términos y Condiciones y Políticas de Privacidad</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Términos y Condiciones</h3>
                <p className="text-gray-600 mb-4">
                  Al utilizar nuestros servicios, usted acepta cumplir con estos términos y condiciones. 
                  RapiCredit se reserva el derecho de modificar estos términos en cualquier momento.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">1.1 Servicios Ofrecidos</h4>
                <p className="text-gray-600 mb-4">
                  RapiCredit ofrece servicios de préstamos personales en la República de Panamá, sujetos a aprobación crediticia.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">1.2 Requisitos</h4>
                <ul className="text-gray-600 mb-4 list-disc list-inside">
                  <li>Ser mayor de 18 años</li>
                  <li>Tener cédula panameña válida</li>
                  <li>Comprobantes de ingresos</li>
                  <li>Documentación adicional según sea requerida</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Política de Privacidad</h3>
                
                <h4 className="font-semibold text-gray-900 mb-2">2.1 Recopilación de Datos</h4>
                <p className="text-gray-600 mb-4">
                  Recopilamos información personal necesaria para evaluar su solicitud de crédito, incluyendo:
                  datos de identificación, información financiera, historial crediticio y datos de contacto.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">2.2 Uso de la Información</h4>
                <p className="text-gray-600 mb-4">
                  Sus datos serán utilizados exclusivamente para:
                </p>
                <ul className="text-gray-600 mb-4 list-disc list-inside">
                  <li>Evaluar su solicitud de crédito</li>
                  <li>Verificar su identidad y capacidad de pago</li>
                  <li>Cumplir con regulaciones financieras</li>
                  <li>Comunicarle sobre el estado de su solicitud</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-2">2.3 Protección de Datos</h4>
                <p className="text-gray-600 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal 
                  contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">2.4 Compartir Información</h4>
                <p className="text-gray-600 mb-4">
                  No compartimos su información personal con terceros, excepto cuando sea necesario para 
                  procesar su solicitud o cuando sea requerido por ley.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Contacto</h3>
                <p className="text-gray-600 mb-4">
                  Para consultas sobre estos términos o nuestra política de privacidad, puede contactarnos a través de 
                  nuestros canales oficiales de atención al cliente.
                </p>

                <p className="text-sm text-gray-500 italic">
                  Última actualización: {new Date().toLocaleDateString('es-ES')}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, privacy_policy_accepted: true }))
                  setShowPrivacyModal(false)
                }}
                className="px-6 py-2 text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity"
              >
                Aceptar y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}