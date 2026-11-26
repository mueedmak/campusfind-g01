"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useStore } from "./store";
interface ReportFormProps {
  campus: string;
}
interface ReportFields {
  title: string;
  status: string;
  category: string;
  location: string;
  date: string;
  description: string;
  name: string;
  email: string;
}
export function ReportForm({ campus }: ReportFormProps) {
  const { addItem } = useStore();
  const [values, setValues] = useState<ReportFields>({
    title: "",
    status: "Lost",
    category: "",
    location: "",
    date: "",
    description: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ReportFields, string>>
  >({});
  const [success, setSuccess] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    for (const [key, value] of Object.entries(values))
      if (!value.trim())
        next[key as keyof ReportFields] = "This field is required.";
    if (values.title.trim().length < 4)
      next.title = "Use at least 4 characters.";
    if (values.description.trim().length < 20)
      next.description = "Please write at least 20 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (
      values.date >
      `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`
    )
      next.date = "Choose today or an earlier date.";
    setErrors(next);
    if (Object.keys(next).length) return;
    addItem({
      id: crypto.randomUUID(),
      title: values.title.trim(),
      status: values.status as "Lost" | "Found",
      category: values.category,
      location: values.location.trim(),
      date: values.date,
      description: values.description.trim(),
      image: (
        {
          Accessories: "/items/bottle.svg",
          Bags: "/items/backpack.svg",
          Books: "/items/book.svg",
          Electronics: "/items/headphones.svg",
          Keys: "/items/keys.svg",
        } as Record<string, string>
      )[values.category],
    });
    setSuccess(true);
  }
  function field(key: keyof ReportFields, label: string, type = "text") {
    return (
      <label>
        {label}
        <input
          type={type}
          aria-label={label}
          value={values[key]}
          onChange={(e) => setValues({ ...values, [key]: e.target.value })}
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
        />
        {errors[key] && (
          <span id={`${key}-error`} className="error">
            {errors[key]}
          </span>
        )}
      </label>
    );
  }
  if (success)
    return (
      <div className="success" role="status">
        <span>✓</span>
        <h2>Your report is on the board.</h2>
        <p>
          Thank you for helping the {campus} community. Your item is now visible
          in Browse items for this session.
        </p>
        <Link href="/items" className="button">
          View the item board ↗
        </Link>
        <button
          className="text-button"
          onClick={() => {
            setSuccess(false);
            setValues({ ...values, title: "", description: "" });
          }}
        >
          Report another item
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} noValidate className="form-card w-full">
      <p className="form-kicker">01 / ITEM DETAILS</p>
      <div className="form-grid">
        {field("title", "Item name")}
        <label>
          Report type
          <select
            aria-label="Report type"
            value={values.status}
            onChange={(e) => setValues({ ...values, status: e.target.value })}
          >
            <option>Lost</option>
            <option>Found</option>
          </select>
        </label>
        <label>
          Category
          <select
            aria-label="Category"
            value={values.category}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
            aria-invalid={!!errors.category}
            aria-describedby="category-error"
          >
            <option value="">Choose a category</option>
            {["Accessories", "Bags", "Books", "Electronics", "Keys"].map(
              (c) => (
                <option key={c}>{c}</option>
              ),
            )}
          </select>
          {errors.category && (
            <span id="category-error" className="error">
              {errors.category}
            </span>
          )}
        </label>
        {field("location", "Last seen / found location")}
        {field("date", "Date lost / found", "date")}
      </div>
      <label>
        Description
        <textarea
          aria-label="Description"
          rows={4}
          placeholder="Colour, brand, and where you last saw it. Keep one unique detail private for verification."
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          aria-invalid={!!errors.description}
         aria-describedby={
  errors.description
    ? "description-count description-error"
    : "description-count"
}
/>
<span id="description-count" className="fine">
  {values.description.trim().length} characters — minimum 20
</span>
{errors.description && (
          <span id="description-error" className="error">
            {errors.description}
          </span>
        )}
      </label>
      <p className="form-kicker">02 / YOUR DETAILS</p>
      <div className="form-grid">
        {field("name", "Your name")}
        {field("email", "Email address", "email")}
      </div>
      <p className="fine">
        Your contact details are not displayed on the board. This assignment
        demo keeps reports in memory and resets on refresh.
      </p>
      <button className="button" type="submit">
        Publish report ↗
      </button>
    </form>
  );
}
interface ContactFormProps {
  itemTitle?: string;
  mode?: "contact" | "claim";
}
export function ContactForm({ itemTitle, mode = "contact" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    const problems = [];
    if (!name.trim()) problems.push("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      problems.push("Please enter a valid email.");
    if (message.trim().length < 20)
      problems.push("Your message needs at least 20 characters.");
    setErrors(problems);
    if (!problems.length) setSent(true);
  }
  return sent ? (
    <div className="success" role="status">
      <span>✓</span>
      <h2>{mode === "claim" ? "Request recorded" : "Message recorded"}</h2>
      <p>
        This is a demo confirmation. No email has been sent.
        {itemTitle && ` Your request concerns ${itemTitle}.`}
      </p>
    </div>
  ) : (
    <form onSubmit={submit} noValidate className="form-card w-full">
      <h2>{mode === "claim" ? "Recognise this item?" : "Send us a message"}</h2>
      {itemTitle && (
        <p>
          Describe a unique feature of the item so its owner can be verified.
        </p>
      )}
      <label>
        Your name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email address
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        {mode === "claim" ? "Identifying details" : "Message"}
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      {errors.length > 0 && (
        <ul className="error" role="alert">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      <button type="submit" className="button">
        {mode === "claim" ? "Send request" : "Send message"} ↗
      </button>
    </form>
  );
}
