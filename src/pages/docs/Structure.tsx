import {
  Box,
  FileCode,
  FileJson,
  Image,
  Layout as LayoutIcon,
  Settings,
  Type,
} from "lucide-react";
import { DocsLayout, Layout } from "../..";

interface FileNode {
  name: string;
  type: "folder" | "file";
  comment?: string;
  isOpen?: boolean;
  children?: FileNode[];
  icon?: unknown;
}

const structureData: FileNode[] = [
  {
    name: ".vscode",
    type: "folder",
    comment: "Recommended VS Code settings",
    children: [
      { name: "extensions.json", type: "file", icon: FileJson },
      { name: "settings.json", type: "file", icon: FileJson },
    ],
  },
  {
    name: "public",
    type: "folder",
    comment: "Static assets (favicon, robots.txt)",
    children: [{ name: "vite.svg", type: "file", icon: Image }],
  },
  {
    name: "src",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "components",
        type: "folder",
        comment: "Shared components",
        isOpen: true,
        children: [
          {
            name: "ui",
            type: "folder",
            comment: "shadcn/ui primitives (Button, Input)",
            icon: Box,
          },
          {
            name: "layout",
            type: "folder",
            comment: "Layout components (Navbar, Footer)",
            icon: LayoutIcon,
          },
        ],
      },
      {
        name: "features",
        type: "folder",
        comment: "Feature-based modules (User, Auth)",
        children: [
          { name: "auth", type: "folder" },
          { name: "dashboard", type: "folder" },
        ],
      },
      { name: "hooks", type: "folder", comment: "Custom React hooks" },
      {
        name: "lib",
        type: "folder",
        comment: "Utility functions (cn, validators)",
        icon: Settings,
      },
      { name: "pages", type: "folder", comment: "Route definitions / Pages" },
      {
        name: "types",
        type: "folder",
        comment: "Shared TypeScript interfaces",
        icon: Type,
      },
      {
        name: "App.tsx",
        type: "file",
        comment: "Root component setup",
        icon: FileCode,
      },
      {
        name: "main.tsx",
        type: "file",
        comment: "Entry point",
        icon: FileCode,
      },
    ],
  },
  {
    name: ".eslintrc.cjs",
    type: "file",
    comment: "ESLint config",
    icon: FileJson,
  },
  {
    name: "components.json",
    type: "file",
    comment: "shadcn/ui config",
    icon: FileJson,
  },
  {
    name: "tailwind.config.js",
    type: "file",
    comment: "Tailwind configuration",
    icon: FileCode,
  },
  {
    name: "tsconfig.json",
    type: "file",
    comment: "TypeScript configuration",
    icon: FileJson,
  },
  {
    name: "vite.config.ts",
    type: "file",
    comment: "Vite configuration",
    icon: Settings,
  },
];

const FileTreeNode = ({
  node,
  depth = 0,
}: {
  node: FileNode;
  depth?: number;
}) => {
  const isFolder = node.type === "folder";
  const colorClass = isFolder ? "text-blue-400" : "text-neutral-400";

  return (
    <div className="font-mono text-sm">
      <div
        className="flex items-center gap-2 py-1 hover:bg-white/5 rounded px-2 -mx-2 transition-colors group"
        style={{ paddingLeft: `${depth * 1.5 + 0.5}rem` }}
      >
        <Box size={16} className={`${colorClass} shrink-0`} />
        <span
          className={`${
            isFolder ? "text-white font-bold" : "text-neutral-300"
          }`}
        >
          {node.name}
        </span>
        {node.comment && (
          <span className="text-neutral-500 text-xs italic ml-4 opacity-50 group-hover:opacity-100 transition-opacity">
            // {node.comment}
          </span>
        )}
      </div>
      {node.children && (
        <div>
          {node.children.map((child, idx) => (
            <FileTreeNode key={idx} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const DocsStructure = () => {
  return (
    <Layout>
      <DocsLayout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Project Structure
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            NEXO generates a scalable, modular architecture designed for growth.
            Whether you choose a simple setup or a feature-based structure,
            everything has its place.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-bg-dark border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
            </div>
            <span className="text-xs text-neutral-500 font-mono ml-2">
              nexo-project
            </span>
          </div>
          <div className="overflow-x-auto">
            {structureData.map((node, idx) => (
              <FileTreeNode key={idx} node={node} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-white/5 border border-white/5">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Box className="text-purple-400" size={18} />
              src/components/ui
            </h3>
            <p className="text-sm text-neutral-400">
              If you selected <strong>shadcn/ui</strong>, this directory
              contains all your installed primitives (buttons, inputs). You own
              this code—modify it to fit your design system.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Settings className="text-emerald-400" size={18} />
              src/settings
            </h3>
            <p className="text-sm text-neutral-400">
              Centralized configuration for your app. Contains the standard{" "}
              <code>cn</code> utility for Tailwind class merging.
            </p>
          </div>
        </div>
      </DocsLayout>
    </Layout>
  );
};
