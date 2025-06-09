# 📋 Documentación del Sistema CRM

## 🎯 Descripción General

El Sistema CRM (Customer Relationship Management) es una aplicación web moderna desarrollada con React.js que permite gestionar las relaciones con clientes a través de cuatro módulos principales: **Compras, Contactos, Negocios y Tickets de Soporte**.

---

## 🏗️ Arquitectura del Sistema

### Estructura de Archivos

crm-app/
├── index.html # Punto de entrada principal
├── styles.css # Estilos globales y temas
├── app.js # Componente principal de la aplicación
├── utils/
│ ├── auth.js # Contexto de autenticación y temas
│ └── router.js # Sistema de enrutamiento personalizado
└── components/
├── Login.js # Formulario de inicio de sesión
├── Header.js # Barra de navegación superior
├── Sidebar.js # Menú lateral con navegación
├── SettingsButton.js # Botón de configuración flotante
├── Dashboard.js # Panel principal con estadísticas
├── Compras.js # Gestión de compras
├── Contactos.js # Gestión de contactos
├── Negocios.js # Gestión de oportunidades de venta
└── Tickets.js # Sistema de tickets de soporte



---

## 🛠️ Tecnologías Utilizadas

### Frontend Framework

- **React 18**: Framework principal para la interfaz de usuario  
- **React Context API**: Gestión de estado global para autenticación y temas  
- **React Hooks**: `useState`, `useEffect`, `useContext` para lógica de componentes

### Estilos y UI

- **Bootstrap 5**: Framework CSS para componentes responsivos  
- **TailwindCSS**: Utilidades CSS para estilos personalizados  
- **Font Awesome 6.5.1**: Iconografía moderna y consistente  
- **Google Fonts (Inter)**: Tipografía profesional y legible  

### Backend y Datos

- **Trickle Database API**: Sistema de base de datos integrado  
- **LocalStorage**: Persistencia de sesión y preferencias de usuario  

---

## 🎨 Diseño y Experiencia de Usuario

### Paleta de Colores

#### Tema Oscuro (Predeterminado)

- Fondo Principal: `#0f0f0f`  
- Componentes: `#1a1a1a`  
- Sidebar: Gradiente `#1a1a2e → #16213e → #0f3460`  
- Texto Principal: `#e0e0e0`  
- Texto Secundario: `#b8b8b8`  

#### Tema Claro

- Fondo Principal: `#f8f9fa`  
- Componentes: `#ffffff`  
- Sidebar: Gradiente `#667eea → #764ba2`  
- Texto: `#212529`  

### Colores de Acento

- Primario: `#4a90e2`  
- Éxito: `#28a745`  
- Advertencia: `#ffc107`  
- Peligro: `#dc3545`  

### Justificación del Diseño

- **Sidebar Colapsible**: Optimiza espacio, con tooltips cuando está contraído  
- **Perfil de Usuario**: Avatar con iniciales y gradiente  
- **Tema Oscuro por Defecto**: Menor fatiga visual y apariencia profesional  

---

## 📊 Módulos Funcionales

### 1. Dashboard

- Vista general del sistema con métricas clave  
- Tarjetas estadísticas con gradientes e iconografía Font Awesome  

### 2. Compras

- Gestión de órdenes y proveedores  
- Campos: Proveedor, Producto, Cantidad, Precio, Fecha  
- Cálculo automático del total  
- Seguimiento del estado  

### 3. Contactos

- Base de datos de clientes y prospectos  
- Vista en tarjetas con datos personales y profesionales  
- Iconografía contextual  

### 4. Negocios

- Pipeline de ventas  
- Etapas: Prospecto → Calificado → Propuesta → Negociación → Cerrado  
- Probabilidad automática  
- Seguimiento de fechas y valores  

### 5. Tickets

- Sistema de soporte  
- Prioridades codificadas por color  
- Estados desde Abierto hasta Cerrado  
- Vista tabular densa y organizada  

---

## 🔐 Sistema de Autenticación

### Credenciales de Prueba

- **Usuario**: `admin@crm.com`  
- **Contraseña**: `admin123`

### Características

- Persistencia en `localStorage`  
- Validación simulada  
- Estados de carga con feedback visual  
- Protección de rutas con redirección  

---

## 🧭 Sistema de Navegación

### Router Personalizado

- Basado en hash (`#`) para navegación sin recarga  
- Context API para estado global  
- Navegación programática  

### Componentes de Ruta

- `Route`: Renderizado condicional  
- `Navigate`: Cambio de rutas desde código  
- `Active States`: Resaltado visual de la sección actual  

---

## ⚙️ Configuración y Personalización

### Sistema de Temas

- **Toggle dinámico** con persistencia  
- **Iconografía contextual** (Sol/Luna)  
- **CSS Variables** para eficiencia  

### Botón de Configuración

- Fijo en pantalla  
- Dropdown con opciones  
- Cierre automático con click externo  

---

## 📱 Responsividad y Accesibilidad

### Diseño Responsive

- Sistema de grid de Bootstrap  
- Breakpoints adaptables  
- Enfoque mobile-first  

### Accesibilidad

- Colores con contraste WCAG  
- Navegación por teclado  
- Tooltips y estados de focus claros  

---

## 🔄 Gestión de Datos

### Trickle Database API

- Operaciones CRUD  
- Tipado consistente  

```javascript
TrickleObject {
  objectId: string,
  objectType: string,
  objectData: object,
  createdAt: string,
  updatedAt: string
}
