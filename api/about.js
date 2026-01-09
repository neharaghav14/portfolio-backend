export default function handler(req, res) {
  res.status(200).json({
    name: "Neha Raghav",
    role: "Frontend Developer",
    message: "About data loaded successfully"
  });
}
