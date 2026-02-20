import AppRoutes from "./routes/AppRoutes"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App




