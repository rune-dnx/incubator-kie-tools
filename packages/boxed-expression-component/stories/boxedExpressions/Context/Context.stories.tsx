/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { BoxedExpressionEditor, BoxedExpressionEditorProps } from "../../../src/BoxedExpressionEditor";
import { BoxedExpressionEditorStory, BoxedExpressionEditorStoryArgs } from "../../boxedExpressionStoriesWrapper";
import { Base as EmptyExpression } from "../../misc/Empty/EmptyExpression.stories";
import { DmnBuiltInDataType, generateUuid } from "../../../src/api";
import { CONTEXT_ENTRY_VARIABLE_MIN_WIDTH } from "../../../src/resizing/WidthConstants";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<BoxedExpressionEditorProps> = {
  title: "Boxed Expressions/Context",
  component: BoxedExpressionEditor,
  includeStories: /^[A-Z]/,
};
export default meta;
type Story = StoryObj<BoxedExpressionEditorStoryArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
            "@_typeRef": undefined,
          },
          expression: undefined!,
        },
      ],
    },
    isResetSupportedOnRootExpression: true,
    widthsById: { "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH] },
  },
};

export const Readonly: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
            "@_typeRef": undefined,
          },
          expression: {
            "@_id": generateUuid(),
            __$$element: "literalExpression",
            text: { __$$text: "readonly text" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: true,
    widthsById: { "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH] },
    isReadOnly: true,
  },
};

export const InstallmentCalculation: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": generateUuid(),
      "@_label": "Installment calculation",
      "@_typeRef": DmnBuiltInDataType.Number,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Fee",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Fee",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "25" },
          },
        },
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Repayments",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Repayments",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: `(Amount*Rate/12) /\n(1-(1+Rate/12)**-Term)` },
          },
        },
        {
          "@_id": generateUuid(),
          // The result expression is a ContextEntry without variable
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Result Expression",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "Fee + Repayments" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
  },
};

export const Customer: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": generateUuid(),
      "@_label": "Customer",
      "@_typeRef": "tCustomer",
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Name",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Name",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "Luiz" },
          },
        },
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Age",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Age",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "30" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
  },
};

export const Nested: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
          },
          expression: {
            __$$element: "context",
            "@_id": "_5D97B484-8003-4323-AADB-AA4C6F3ECA73",
            "@_label": "Expression Name",
            contextEntry: [
              {
                "@_id": generateUuid(),
                variable: {
                  "@_id": generateUuid(),
                  "@_name": "ContextEntry-1",
                },
                expression: {
                  __$$element: "literalExpression",
                  "@_id": generateUuid(),
                  "@_label": "ContextEntry-1",
                  text: { __$$text: "" },
                },
              },
            ],
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
      "_5D97B484-8003-4323-AADB-AA4C6F3ECA73": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
    },
  },
};

export const DemoContext: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_30EDB05A-BF35-474C-8589-CFC5771B0FFE",
      "@_typeRef": "string",
      contextEntry: [
        {
          "@_id": "_BD71183B-D8B5-4314-90AF-ADD5CADA7CBC",
          expression: {
            __$$element: "context",
            "@_id": "_8EF9221A-32FF-4DE3-B475-EA31A6AD3198",
            "@_typeRef": "number",
            contextEntry: [
              {
                "@_id": "_570700DF-CB73-4B41-93B6-E10D5BB8705C",
                variable: {
                  "@_id": "_C6E5173B-35A8-485A-9C28-90AA651006DF",
                  "@_name": "AgeDT",
                  "@_typeRef": "days and time duration",
                },
                expression: {
                  __$$element: "literalExpression",
                  "@_id": "_568052CA-53E5-4526-8DD2-1837A63E5666",
                  "@_typeRef": "days and time duration",
                  "@_label": "AgeDT",
                  text: { __$$text: "today() - Applicant.Born" },
                },
              },
              {
                "@_id": "_AF7D4407-B6A4-4B91-AA55-869F30748304",
                expression: {
                  __$$element: "literalExpression",
                  "@_id": "_384FD099-CBFB-440C-9027-3C711070AB43",
                  "@_typeRef": "time",
                  "@_label": "AgeYR",
                  text: { __$$text: 'floor(AgeDT/duration("P365DT6H"))' },
                },
                variable: {
                  "@_id": "_6C0C9B33-0D13-470D-8575-B4A5BEB2529D",
                  "@_name": "AgeYR",
                  "@_typeRef": "number",
                  description: { __$$text: "" },
                },
              },
              {
                "@_id": "_2A115201-8646-4876-8F35-765BFF7C76C1",
                expression: {
                  __$$element: "literalExpression",
                  "@_id": "_384FD099-CBFB-440C-9027-3C711070AB43",
                  "@_typeRef": "days and time duration",
                  "@_label": "Pre-Qualification",
                  text: { __$$text: "AgeYR" },
                },
              },
            ],
            "@_label": "Age",
          },
          variable: {
            "@_id": "_E18473A6-D5CA-4DDE-B7B5-C57FCE88B715",
            "@_name": "Age",
            "@_typeRef": "number",
            description: { __$$text: "" },
          },
        },
        {
          "@_id": "_39683B6D-750E-4302-B064-BD65528DF944",
          expression: {
            __$$element: "invocation",
            "@_id": "_A4A729AC-93DA-4C7D-8B2E-BFD8ED3D12D0",
            "@_typeRef": "number",
            binding: [
              {
                parameter: {
                  "@_id": "_71BC4518-FFD8-441A-BA38-98B284DA28B6",
                  "@_name": "A",
                  "@_typeRef": "number",
                },
                expression: {
                  __$$element: "literalExpression",
                  "@_id": "_CD484FA1-4693-43B6-BBAF-E29B08814B10",
                  "@_typeRef": "number",
                  "@_label": "A",
                  text: { __$$text: "10" },
                },
              },
              {
                parameter: {
                  "@_id": "_748E50CA-8F9B-459E-998D-E6E25F37033A",
                  "@_typeRef": "number",
                  "@_name": "B",
                },
                expression: {
                  __$$element: "literalExpression",
                  "@_id": "_6A8E9CA1-BB66-433B-B044-42A502437849",
                  "@_typeRef": "number",
                  "@_label": "B",
                  text: { __$$text: "5" },
                },
              },
            ],
            expression: {
              __$$element: "literalExpression",
              "@_id": "_4B1CB2D6-91B7-4FDA-A0EE-947D9341CD44",
              text: { __$$text: "FUNK" },
            },
            "@_label": "DTI",
          },
          variable: {
            "@_id": "_41E3D75D-29FE-401A-B13C-C696CF5C4762",
            "@_name": "DTI",
            "@_typeRef": "number",
            description: { __$$text: "" },
          },
        },
        {
          "@_id": "_575149C2-31D5-49C9-BF96-5E9139B1F14C",
          expression: {
            __$$element: "literalExpression",
            "@_id": "_B2F191AD-FAB0-47DE-8C24-2B49610E08F9",
            "@_typeRef": "days and time duration",
            "@_label": "Pre-Qualification",
            text: {
              __$$text:
                '"The applicant is " +string(Age) + " years old, and the DTI is " +string(DTI) + "  is generated met by"',
            },
          },
        },
      ],
      "@_label": "Pre-Qualification",
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_30EDB05A-BF35-474C-8589-CFC5771B0FFE": [120],
      "_8EF9221A-32FF-4DE3-B475-EA31A6AD3198": [120],
      "_568052CA-53E5-4526-8DD2-1837A63E5666": [660],
      "_384FD099-CBFB-440C-9027-3C711070AB43": [660],
      "_B2F191AD-FAB0-47DE-8C24-2B49610E08F9": [782],
      "_A4A729AC-93DA-4C7D-8B2E-BFD8ED3D12D0": [120],
      "_CD484FA1-4693-43B6-BBAF-E29B08814B10": [190],
      "_6A8E9CA1-BB66-433B-B044-42A502437849": [190],
    },
  },
};
