import React from "react";

export interface ExpressionItemType {
  title: string;
  img: string;
  type: string;
}

export interface RuleType {
  ruleId: string;
  type: string;
  title: string;
  usedBy: string[]
}
