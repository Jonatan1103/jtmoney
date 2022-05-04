import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {
    transection: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transections', () => {
      return this.schema.all('transection')
    })

    this.post('/transections', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transection', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);