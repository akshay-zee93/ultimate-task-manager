import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const TaskList = lazy(() => import("./pages/Home"));
const TaskForm = lazy(() => import("./pages/AddTask"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Provider store={store}>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/new" element={<TaskForm />} />
                <Route path="/edit/:id" element={<TaskForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Provider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
