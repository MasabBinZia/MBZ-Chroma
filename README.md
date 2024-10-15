<p>
  <img src="https://github.com/user-attachments/assets/9ae5ad5e-04ba-48aa-a2e7-9c94567b6b49" alt="MBZ Choroma" width="100" height="100">
</p>



# MBZ Chroma

MBZ Chroma is a platform that showcases the best free UI resources for developers. Users can explore a curated list of resources or request new ones to be featured on the site. All requests are reviewed by an admin before approval.

## Live Demo

You can check out the live website here: [MBZ Chroma](https://mbz-chroma.vercel.app)

## Features

- **Browse UI Resources:** A collection of free UI resources for developers.
- **Request New Resources:** Users can sign in and submit new resources by providing the following:
  - Title
  - Description
  - Link
  - A screenshot will be generated automatically using the Screenshotmachine API.
- **Admin Review Process:** All submitted resources go through an admin review. Once approved, the resource is added to the featured list on the site.

## Tech Stack

- **Next.js**: React framework for building fast web applications.
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Convex (BaaS)**: Backend-as-a-Service for managing the app’s data and requests.
- **Clerk**: User authentication and session management.
- **Cloudinary**: Manages and delivers images for the site.
- **Screenshotmachine API**: Automatically generates screenshots of submitted resources' URLs.
- **Shadcn UI**: A modern, customizable UI component library.
- **React Hook Form**: Handles form submissions and validation.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Bun**: Bun is an all-in-one JavaScript runtime & toolkit designed for speed.


## Installation

To get started locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MasabBinZia/MBZ-Chroma.git
   ```

2. Install the dependencies:

   ```bash
   cd mbz-chroma
   bun install
   ```

3. Set up environment variables:

   Create a `.env.local` file and add the following environment variables:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   CONVEX_DEPLOYMENT=<your-convex-deployment>
   
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   CLOUDINARY_FOLDER_NAME=<your-cloudinary-folder-name>

   SCREENSHOT_API_KEY=<your-screenshotmachine-api-key>

   NEXT_PUBLIC_ADMIN_EMAIL=<your-admin-email>
   ```

4. Run the Convex backend locally:

   ```bash
   npx convex dev
   ```

   This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs in the environment variables.

5. Run the development server:

   ```bash
   bun run dev
   ```

   The app will be available at `http://localhost:3000`.

## How to Use

1. **Browse Resources**: You can browse the featured UI resources from the homepage.
2. **Sign In**: Users need to sign in to request new resources.
3. **Submit a Resource**: After signing in, you can fill out a form to submit the following details:
   - Title
   - Description
   - Link
4. **Admin Review**: The submitted resource will be reviewed by the admin. If approved, it will appear on the site.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Masab Bin Zia
