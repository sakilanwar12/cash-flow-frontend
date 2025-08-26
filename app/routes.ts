import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    // public pages
    layout("./routes/public/layout.tsx", [
      route("/", "./routes/public/Home.tsx"),
      route("/about", "./routes/public/about.tsx"),
      route("/contact", "./routes/public/contact.tsx"),
      route("/features", "./routes/public/features.tsx"),
      route("/faq", "./routes/public/faq.tsx"),
    ]),
    // auth pages
    layout("./routes/auth/layout.tsx", [
      route("auth/login", "./routes/auth/login.tsx"),
      route("auth/register", "./routes/auth/register.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
