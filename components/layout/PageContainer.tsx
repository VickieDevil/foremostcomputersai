"use client";

import { ReactNode } from "react";

interface Props {

  title: string;

  subtitle?: string;

  children: ReactNode;

}

export default function PageContainer({

  title,

  subtitle,

  children,

}: Props) {

  return (

    <div>

      <div

        style={{

          marginBottom: 24,

        }}

      >

        <h1

          style={{

            margin: 0,

          }}

        >

          {title}

        </h1>

        {subtitle && (

          <p

            style={{

              color: "#64748b",

              marginTop: 8,

            }}

          >

            {subtitle}

          </p>

        )}

      </div>

      {children}

    </div>

  );

}