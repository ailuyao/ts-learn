interface Pattern {
  pattern?: RegExp;
  optional?: boolean;
  callback?: () => void;
}

interface Translation {
  [key: string]: Pattern | {};
  placeholder?: string;
}

