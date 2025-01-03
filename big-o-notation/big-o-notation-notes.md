# big-o-notation-notes

## Notes

### **What is Big O Notation?**

- **Big O** tells us how an algorithm's runtime or steps grow as the input size ( N ) increases.
- It **ignores small stuff** like constants and focuses only on how fast the time grows as input gets bigger.

---

### **Common Big O Notations (Fast to Slow)**

1. **O(1)** – Constant Time: Always takes the same time, no matter the size of input.

   - Example: Accessing an array element by index (`arr[0]`).

2. **O(log N)** – Logarithmic Time: Time grows slowly as the input size grows.

   - Example: Searching in a sorted list (binary search).

3. **O(N)** – Linear Time: Time grows directly with input size.

   - Example: Looping through all elements in an array.

4. **O(N log N)** – Log-Linear Time: Time grows faster than N, but not as fast as N^2.

   - Example: Efficient sorting algorithms (like merge sort).

5. **O(N²)** – Quadratic Time: Time grows very quickly (nested loops).

   - Example: Comparing every pair of items in a list.

6. **O(2^N)** – Exponential Time: Time doubles with every extra input. Very slow!
   - Example: Brute-forcing passwords.

---

### **How to Analyze Big O From Code**

1. **Step 1: Look at the loops**:

   - Single loop? → O(N)
   - Nested loops? → O(N^2)

2. **Step 2: Look at the operations**:

   - Basic math, comparisons, or assignments → O(1)
   - Function calls inside loops → Depends on the function’s Big O.

3. **Step 3: Keep only the biggest term**:
   - Example: If you see: 5N + 3, it’s just O(N).

---

### **Examples**

1. **Simple Loop:**

```javascript
function sum(numbers) {
  let sum = 0; // O(1)
  for (let i = 0; i < numbers.length; i++) {
    // O(N)
    sum += numbers[i]; // O(1) per iteration
  }
  return sum; // O(1)
}
// Overall: O(N)
```

2. **Nested Loop:**

```javascript
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(N)
    for (let j = 0; j < arr.length; j++) {
      // O(N) nested
      if (i !== j && arr[i] === arr[j]) {
        // O(1)
        return true;
      }
    }
  }
  return false; // O(1)
}
// Overall: O(N²)
```

---

### **Cheat Sheet for Big O**

- **No Loops?** O(1)
- **Single Loop?** O(N)
- **Nested Loops?** O(N²)
- **Dividing Input?** O(log N)
- **Sorting?** O(N log N)

---

Keep it simple:

- Count the loops.
- Multiply if loops are nested.
- Drop constants and focus on the biggest term.
