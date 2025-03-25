import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0",
    title: "Documentation API Acara",
    description: "Documentation API Acara",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-acara-beta.vercel.app/api",
      description: "Production Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      RegisterRequest: {
        fullname: "sonny ghandi",
        username: "sonny",
        email: "H2u0U@example.com",
        password: "Sonny123456",
        confirmPassword: "Sonny123456",
      },
      LoginRequest: {
        identifier: "sonnya",
        password: "Sonnya123456",
      },
      ActivationRequest: {
        code: "abcd1234",
      },
      UpdatePasswordRequest: {
        oldPassword: "Sonnya123456",
        password: "Sonny123456",
        confirmNewPassword: "Sonny123456",
      },
      UpdateProfileRequest: {
        fullname: "sonny ghandi",
        profilePicture: "https://res.cloudinary.com/diton4fcf/image/upload/v1737351835/sf94istjmp32aqhyncvx.jpg",
      },
      CreatCategoryRequest: {
        name: "name - category",
        description: "description - category",
        icon: "icon - category",
      },
      CreateEventRequest: {
        name: "Acara - 1 - name",
        banner: "https://res.cloudinary.com/diton4fcf/image/upload/v1737351835/sf94istjmp32aqhyncvx.jpg",
        category: "678f6147261af1615f18432a",
        description: "Acara - description",
        startDate: "2024-12-16 10:45:00",
        endDate: "2024-12-17 10:45:00",
        location: {
          region: 3273180003,
          coordinates: [6.6, 10.1],
          address: "Jl. Jend. Sudirman, Jakarta",
        },
        isOnline: false,
        isFeatured: false,
        isPublish: false,
      },
      CreateBannerRequest: {
        title: "Banner 1 - title",
        image: "https://res.cloudinary.com/diton4fcf/image/upload/v1738674179/dl8lgkun6ovefgmjij4d.jpg",
        isShow: true,
      },
      CreateTicketRequest: {
        price: 1500,
        name: "Ticket Reguler",
        events: "67a0c15890507f294ccef65a",
        description: "Ticket VIP - description",
        quantity: 600,
      },
      CreateOrderRequest: {
        events: "event object id",
        ticket: "ticket object id",
        quantity: 1,
      },
      RemoveMediaRequest: {
        fileUrl: "",
      },
    },
  },
};
const outputFile = "./swagger-output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({
  openapi: "3.0.0",
})(outputFile, endpointsFiles, doc);
