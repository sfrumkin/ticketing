import request from 'supertest';
import { app} from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if ticket is not found', async () =>{
  const id = mongoose.Types.ObjectId().toHexString();
  await request(app)
    .get(`/api/tickets/${id}`)
    .send()
    .expect(404);
});

it('returns a ticket if ticket is  found', async () =>{

  const title = 'shira';
  const price =20;

  const response = await request(app)
  .post('/api/tickets')
  .set('Cookie', global.signin())
  .send({
    title: title,
    price: price
  })
  .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});